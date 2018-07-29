rem cd ../memory/public
rem npm run build:prod

cd ../../tic-tac-toe
npm run build


cd ../firebase__dist
rm --recursive --dir public
mkdir public
cd public
rem mkdir memory
rem cp --recursive ../../memory/public/dist/* ./memory/
mkdir tic-tac-toe
cp --recursive ../../tic-tac-toe/dist/tic-tac-toe/* ./tic-tac-toe/

rem firebase deploy
