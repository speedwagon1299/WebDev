for url in $(curl -s https://github.com/jonasschmedtmann/ultimate-react-course/tree/main/03-pizza-menu/starter | jq -r '.[] | select(.type=="file") | .download_url');
do wget $url
