---
permalink: /trefnoc/
layout: page
title: treFnoc
published: true
---


### Convert videos in a queue

The goal **was** gathering a list of files being uploaded to the company's intranet that **would** work as media reference, and normalize them to the same standard which **would** be utilized on the website.

**Problem is**: this was done back in May 2010 and now, in Jul 2016, it needs some tweaking to work as the first and only released version was never really intended to work without the company's database.

This is a heavy process so it must run on a separate server and be easy to diagnose issues, if any happen. So there comes treFnoc.

I hope this can serve as reference for people looking on how to do some stuff on Python. Features include:

- multithreaded and very simplistic Graphical User Interface, with a progress bar and queue lists, using QT
- command line options, using parser
- database connection, using mysql
- proper error handling
- log to screen and to file
- hashing file to MD5 (not SHA1 due to company standards)
- and a few more little tricks

To test this you'll need to have PyQT4 installed and ffmpeg.

https://github.com/cauerego/trefnoc

![screenshot](trefnoc screenshot.png)
