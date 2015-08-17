import pyimgur
import os
import sys
from Tkinter import Tk

def copy(link):
	r = Tk()
	r.withdraw()
	r.clipboard_clear()
	r.clipboard_append(link)
	r.destroy()

print "WinPyImgur 0.9 | 2014-2015 | 730\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nuploading...\n"

CLIENT_ID = "aef690e18f8dc80"

im = pyimgur.Imgur(CLIENT_ID)
uploaded_image = im.upload_image(sys.argv[1], title="Uploaded with PyImgur")
print "Image link: " + uploaded_image.link + "\n"

copyOrNot = raw_input("Copy link? ('Y' for Yes)\n")
if copyOrNot.lower() == "y":
	copy(uploaded_image.link)
	