#!/usr/bin/python

import argparse
import json
import os
import requests
import shutil

ACCESS_TOKEN = 'TODO'
ALBUM_ID = 'TODO'
DEFAULT_PATH = "https://graph.facebook.com/v2.3/" + ALBUM_ID + "?access_token=" + ACCESS_TOKEN + "&debug=all&fields=photos.limit(100)%7Bcreated_time%2Cname%2Cimages%7D&format=json&method=get&pretty=0&suppress_http_code=1"

IMAGES_DIR = 'public/images'

def fetch_objs(path):
  def process(photo_data):
    photo_id = photo_data['id']
    flattened_data = {
      ik: iv
        for (ik, iv) in photo_data.iteritems() if ik in ['created_time', 'name']
    }
    image = reduce(
      lambda cur, new:
        (cur == None and new) or (cur['width'] > new['width'] and cur) or new,
      photo_data['images']
    )
    flattened_data['image'] = image
    return (photo_id, flattened_data)

  result = requests.get(path).json()
  if result.get('error', False):
    raise Exception('FB request had error: %s' % (result))
  return { k: v for (k, v) in map(process, result['photos']['data']) }

def get_filename(photo_id):
  return IMAGES_DIR + '/' + photo_id + '.jpg'

def download(objs):
  for k, v in objs.iteritems():
    url = v['image']['source']
    response = requests.get(url, stream=True)
    with open(get_filename(k), 'wb') as out_file:
      shutil.copyfileobj(response.raw, out_file)
    del response

def generate(objs):
  selected_ids = [f[:-4] for f in os.listdir(IMAGES_DIR) if f[-4:] == '.jpg']
  selected_objs = []
  for k, v in objs.iteritems():
    if k not in selected_ids:
      continue
    selected_objs.append({
      'id': k,
      'caption': v['name'],
      'path': '/' + get_filename(k),
      'timestamp': v['created_time'],
    })
  print json.dumps(selected_objs)

def main(args):
  objs = fetch_objs(args.path)
  if objs and not os.path.exists(IMAGES_DIR):
    os.makedirs(IMAGES_DIR)

  if args.mode == 'download':
    download(objs)
    return
  if args.mode == 'generate':
    generate(objs)
    return

if __name__ == '__main__':
  parser = argparse.ArgumentParser(
    description='Download images from FB graph explorer'
  )
  parser.add_argument(
    '-p',
    dest='path',
    type=str,
    help='HTTP address for GET request to download album',
    default=DEFAULT_PATH
  )
  parser.add_argument(
    '--mode',
    type=str,
    choices=['download', 'generate']
  )

  args = parser.parse_args()
  main(args)
