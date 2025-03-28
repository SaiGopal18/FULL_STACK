@echo off
cd /d "F:\GETTING_PLACED\FULL_STACK"
git add .
git commit -m "Auto-sync: %date% %time%"
git push origin master
