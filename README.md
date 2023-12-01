<div align="center">
<pre>
website that gives easy access to the finances of 501(c)(3) non-profits 
</pre>
</div>

west campus coders project

## Tasks:
- [x] make a small, functional API 
- [ ] dockerize the API 
- [ ] have the backend work with a mySQL server
- [ ] create a backend class to parse the index CSV
- [ ] allow the backend to find the correct XML file

## Running the frontend

clone this repository

```sh 
git clone git@github.com:West-Campus-Coders/501c3info.git
```

OR 

```sh 
git clone https://github.com/West-Campus-Coders/501c3info.git
```

install npm packages (make sure you're in the frontend directory)

```sh 
npm i 
```

run the website

```sh 
npm run dev
```

## Running the backend API

PREREQUISITES: make sure you have flask installed
```sh 
pip install Flask
```

run the backend flask server
```sh
cd backend
flask run 
```

## Using the website

Once you have both frontend and backend running (on the same machine), you can use the <code>localhost</code> as the IP address as the input for the frontend.