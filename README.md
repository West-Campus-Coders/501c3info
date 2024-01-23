<div align="center">
<pre>
<img src="https://avatars.githubusercontent.com/u/150297835?s=48&v=4">
A website that gives easy access to the finances of 501(c)(3) non-profits 
</pre>
</div>

West campus coders project
## Project set up

### Tools use
- Django 
- React 
- SQL

## Tasks:
- [x] make a small, functional API 
- [ ] dockerize the API 
- [ ] have the backend work with a mySQL server
- [x] create a backend class that can parse the index CSV file
- [ ] allow the backend to find the correct XML file
- [ ] send the XML information to the frontend

## Running the frontend

clone this repository

```sh 
git clone git@github.com:West-Campus-Coders/501c3info.git
```

OR 

```sh 
git clone https://github.com/West-Campus-Coders/501c3info.git
```

install npm packages for the frontend

```sh 
cd frontend
npm i 
```

run the website

```sh 
npm run dev
```

## Running the backend API

PREREQUISITES: Flask must be installed
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
