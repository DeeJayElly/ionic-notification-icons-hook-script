# ionic-notification-icons-hook-script
Ionic hook script to handle moving notification icons for Android

Having custom notification icons for Android, is required for a professional mobile app. Unfortunately, Cordova CLI doesn’t support this key functionality yet.

You can manually move of copy the icon files to the proper directories each time you build. But if you want to version control your icons, or make the build replicable across machines, you need to automatically put the image resource files where the platform specific build processes expect them.

I like to store my icon screen files under a top level directory (a peer to the www directory) and use an after_prepare hook to copy the files to their correct directories under platforms. It’s a bit tedious to figure out, but once you’ve done it once and written the hook, you are done.

# Usage:

1. Add the script in the: /after_prepare/ hook folder

2. Modify the inputFolder, outputFolder & iconName paths
