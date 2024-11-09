import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const POOL_WIDTH = 600;
const POOL_HEIGHT = 400;
const WATER_HEIGHT = 150;
const PLANK_WIDTH = 200;    
const PLANK_HEIGHT = 20;

export default function WaterPlankSimulation({ plankAngle }) {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    // Matter.js setup
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;

    // Create engine with reduced gravity
    const engine = Engine.create({
      gravity: {
        x: 0,
        y: 0.5  // Reduced gravity for better floating
      }
    });
    engineRef.current = engine;
    
    console.log('Engine created:', engine);

    // Create renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: POOL_WIDTH,
        height: POOL_HEIGHT,
        wireframes: false,
        background: '#87CEEB',
        enableSleeping: false
      }
    });
    
    console.log('Render created:', render);

    // Create plank with lighter density
    const plank = Bodies.rectangle(POOL_WIDTH / 2, POOL_HEIGHT - WATER_HEIGHT, PLANK_WIDTH, PLANK_HEIGHT, {
      density: 0.05,    // Reduced density to float better
      friction: 0.01,
      frictionAir: 0.001,
      restitution: 0.3,
      render: { fillStyle: '#8B4513' }
    });

    // Create walls and pool bottom
    const walls = [
      Bodies.rectangle(0, POOL_HEIGHT / 2, 20, POOL_HEIGHT, {      // Left wall
        isStatic: true,
        render: { 
          fillStyle: '#555555',
          visible: true
        }
      }),
      Bodies.rectangle(POOL_WIDTH, POOL_HEIGHT / 2, 20, POOL_HEIGHT, {    // Right wall
        isStatic: true,
        render: { 
          fillStyle: '#555555',
          visible: true
        }
      }),
      Bodies.rectangle(POOL_WIDTH / 2, POOL_HEIGHT, POOL_WIDTH, 40, {    // Pool bottom
        isStatic: true,
        render: { 
          fillStyle: '#444444',
          visible: true
        }
      })
    ];

    // Create water body (adjusted to sit above pool bottom)
    const water = Bodies.rectangle(POOL_WIDTH / 2, POOL_HEIGHT - WATER_HEIGHT / 2, POOL_WIDTH, WATER_HEIGHT, {
      isStatic: true,
      isSensor: true,
      render: {
        fillStyle: '#0077be',
        opacity: 0.5
      }
    });

    // Create particles with adjusted density
    const particles = Array.from({ length: 50 }, (_, i) => 
      Bodies.circle(
        Math.random() * 560 + 20,  // Keep within walls
        POOL_HEIGHT - WATER_HEIGHT + Math.random() * WATER_HEIGHT,
        3,
        {
          density: 0.6,    // Adjusted for better floating
          friction: 0.05,
          frictionAir: 0.001,
          restitution: 0.3,
          render: {
            fillStyle: '#ADD8E6',
            opacity: 0.6
          }
        }
      )
    );

    // Add bodies to world
    World.add(engine.world, [plank, water, ...particles, ...walls]);

    // Create and start the runner
    const runner = Runner.create();
    Runner.run(runner, engine);
    console.log('Runner started:', runner);

    // Start the renderer
    Render.run(render);
    console.log('Render started');

    // Add debug log to verify update loop
    Matter.Events.on(engine, 'beforeUpdate', () => {
      particles.forEach(particle => {
        // Stronger buoyancy for particles
        if (particle.position.y > 280) {  // Water level
          Matter.Body.applyForce(particle, particle.position, {
            x: 0,
            y: -0.008  // Progressive buoyancy force
          });
        }

        // Rightward movement
        Matter.Body.setVelocity(particle, {
          x: 2,
          y: particle.velocity.y
        });

        // Wrap particles
        if (particle.position.x > POOL_WIDTH - 20) {
          Matter.Body.setPosition(particle, {
            x: 20,
            y: particle.position.y,
          });
          Matter.Body.setVelocity(particle, {
            x: 1,
            y: particle.velocity.y,
          });
        }
      });

      // Strong buoyancy for plank
      if (plank.position.y > 270) {  // Slightly higher threshold for plank
        const buoyancyForce = -1;  // Progressive buoyancy
        
        Matter.Body.applyForce(plank, plank.position, {
          x: 0,
          y: buoyancyForce
        });

        // Strong damping for stability
        Matter.Body.setVelocity(plank, {
          x: plank.velocity.x * 0.98,
          y: plank.velocity.y * 0.95
        });
      }

      // Leftward propulsion force
      const propulsionForce = -0.001;
      Matter.Body.applyForce(plank, plank.position, {
        x: propulsionForce,
        y: 0
      });

      // Matter.Body.setAngularVelocity(plank, -0.01);
      Matter.Body.setAngle(plank, plankAngle);
    });

    return () => {
      // Cleanup
      console.log('Cleaning up engine and render');
      Runner.stop(runner);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [plankAngle]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        maxWidth: `${POOL_WIDTH}px`,
        height: `${POOL_HEIGHT}px`,
        margin: '2rem auto',
        display: 'block'
      }} 
    />
  );
} 
