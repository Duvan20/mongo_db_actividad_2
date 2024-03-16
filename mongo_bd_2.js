db.createCollection('users');

db.users.insertMany(
    [
        {
            name:'Duvan',
            lastname: 'Morales',
            email:'morales@gmail.com',
            city:'Medellin',
            contry: 'Colombia',
            salaty: 5500,
            age:18,
            height:183,
            weight:86
        },
        {
            name:'Daniel',
            lastname: 'Hurtado',
            email:'daniel@gmail.com',
            city:'titiribi',
            contry: 'venezuela',
            salaty:50000 ,
            age: 19,
            height:174,
            weight:58
        },
        {
            "name": "Juan",
            "lastname": "Martinez",
            "email": "juan.martinez@example.com",
            "city": "Barquisimeto",
            "country": "Venezuela",
            "salary": 55000,
            "age": 30,
            "height": 180,
            "weight": 75
        },
        {
            "name": "Ana",
            "lastname": "Gonzalez",
            "email": "ana.gonzalez@example.com",
            "city": "Maracaibo",
            "country": "Venezuela",
            "salary": 48000,
            "age": 28,
            "height": 165,
            "weight": 55
        },
        {
            "name": "Pedro",
            "lastname": "Ramirez",
            "email": "pedro.ramirez@example.com",
            "city": "Valencia",
            "country": "Venezuela",
            "salary": 62000,
            "age": 35,
            "height": 175,
            "weight": 80
        },
        {
            "name": "Sofia",
            "lastname": "Fernandez",
            "email": "sofia.fernandez@example.com",
            "city": "Caracas",
            "country": "Venezuela",
            "salary": 58000,
            "age": 27,
            "height": 168,
            "weight": 63
        },
        {
            "name": "Luis",
            "lastname": "Perez",
            "email": "luis.perez@example.com",
            "city": "Merida",
            "country": "Venezuela",
            "salary": 53000,
            "age": 32,
            "height": 172,
            "weight": 70
        },
        {
            "name": "Laura",
            "lastname": "Sanchez",
            "email": "laura.sanchez@example.com",
            "city": "Maracay",
            "country": "Venezuela",
            "salary": 60000,
            "age": 29,
            "height": 170,
            "weight": 58
        },
        {
            "name": "Carlos",
            "lastname": "Gutierrez",
            "email": "carlos.gutierrez@example.com",
            "city": "Carupano",
            "country": "Venezuela",
            "salary": 51000,
            "age": 31,
            "height": 178,
            "weight": 73
        },
        {
            "name": "Mariana",
            "lastname": "Torres",
            "email": "mariana.torres@example.com",
            "city": "San Cristobal",
            "country": "Venezuela",
            "salary": 57000,
            "age": 26,
            "height": 163,
            "weight": 52
        },
        {
            "name": "Gabriel",
            "lastname": "Diaz",
            "email": "gabriel.diaz@example.com",
            "city": "Puerto La Cruz",
            "country": "Venezuela",
            "salary": 54000,
            "age": 33,
            "height": 176,
            "weight": 78
        },
        {
            "name": "Valeria",
            "lastname": "Alvarez",
            "email": "valeria.alvarez@example.com",
            "city": "Barcelona",
            "country": "Venezuela",
            "salary": 59000,
            "age": 34,
            "height": 167,
            "weight": 65
        }
    ]); 
    
db.users.insertMany(
    [
        {
            "name": "camilo",
            "lastname": "Martinez",
            "email": "juan.martinez@example.com",
            "city": "Madrid",
            "country": "España",
            "salary": 55000,
            "age": 30,
            "height": 180,
            "weight": 75
        },
        {
            "name": "zhalet",
            "lastname": "Gonzalez",
            "email": "ana.gonzalez@example.com",
            "city": "Miami",
            "country": "Estados unidos",
            "salary": 48000,
            "age": 28,
            "height": 165,
            "weight": 55
        },
        {
            "name": "Sarah",
            "lastname": "Johnson",
            "email": "sarah.johnson@example.com",
            "city": "New York",
            "country": "United States",
            "salary": 70000,
            "age": 36,
            "height": 168,
            "weight": 68
        },
        {
            "name": "Camille",
            "lastname": "Martin",
            "email": "camille.martin@example.com",
            "city": "Paris",
            "country": "France",
            "salary": 58000,
            "age": 38,
            "height": 168,
            "weight": 65,
            
        },
        {
            "name": "Alexander",
            "lastname": "Wong",
            "email": "alexander.wong@example.com",
            "city": "Vancouver",
            "country": "Canada",
            "salary": 65000,
            "age": 35,
            "height": 178,
            "weight": 75
        },
        {
            "name": "Emma",
            "lastname": "Chen",
            "email": "emma.chen@example.com",
            "city": "Toronto",
            "country": "Canada",
            "salary": 62000,
            "age": 29,
            "height": 163,
            "weight": 58
        },
        {
            "name": "Lucas",
            "lastname": "Santos",
            "email": "lucas.santos@example.com",
            "city": "Rio de Janeiro",
            "country": "Brazil",
            "salary": 58000,
            "age": 28,
            "height": 175,
            "weight": 70
        },
        {
            "name": "Gabriela",
            "lastname": "Silva",
            "email": "gabriela.silva@example.com",
            "city": "São Paulo",
            "country": "Brazil",
            "salary": 55000,
            "age": 32,
            "height": 170,
            "weight": 63
        },
        {
            "name": "Sofía",
            "lastname": "Gómez",
            "email": "sofia.gomez@example.com",
            "city": "Buenos Aires",
            "country": "Argentina",
            "salary": 51000,
            "age": 33,
            "height": 165,
            "weight": 60
        },
        {
            "name": "Martín",
            "lastname": "López",
            "email": "martin.lopez@example.com",
            "city": "Córdoba",
            "country": "Argentina",
            "salary": 49000,
            "age": 29,
            "height": 178,
            "weight": 75
        },
        {
            "name": "Camila",
            "lastname": "Rodríguez",
            "email": "camila.rodriguez@example.com",
            "city": "Santiago",
            "country": "Chile",
            "salary": 48000,
            "age": 30,
            "height": 163,
            "weight": 58
        },
        {
            "name": "Diego",
            "lastname": "Fernández",
            "email": "diego.fernandez@example.com",
            "city": "Valparaíso",
            "country": "Chile",
            "salary": 52000,
            "age": 35,
            "height": 175,
            "weight": 70
        },
        {
            "name": "Hannah",
            "lastname": "Schmidt",
            "email": "hannah.schmidt@example.com",
            "city": "Berlin",
            "country": "Germany",
            "salary": 58000,
            "age": 31,
            "height": 170,
            "weight": 65
        },
        {
            "name": "Max",
            "lastname": "Müller",
            "email": "max.mueller@example.com",
            "city": "Hamburg",
            "country": "Germany",
            "salary": 60000,
            "age": 36,
            "height": 180,
            "weight": 80
        },
        {
            "name": "Laura",
            "lastname": "González",
            "email": "laura.gonzalez@example.com",
            "city": "Bogotá",
            "country": "Colombia",
            "salary": 47000,
            "age": 28,
            "height": 160,
            "weight": 55
        },
        {
            "name": "Andrés",
            "lastname": "Martínez",
            "email": "andres.martinez@example.com",
            "city": "Medellín",
            "country": "Colombia",
            "salary": 49000,
            "age": 32,
            "height": 175,
            "weight": 70
        },
        {
            "name": "Priya",
            "lastname": "Patel",
            "email": "priya.patel@example.com",
            "city": "Mumbai",
            "country": "India",
            "salary": 45000,
            "age": 27,
            "height": 160,
            "weight": 55
        },
        {
            "name": "Raj",
            "lastname": "Kumar",
            "email": "raj.kumar@example.com",
            "city": "New Delhi",
            "country": "India",
            "salary": 51000,
            "age": 34,
            "height": 175,
            "weight": 68
        }        
    ]
);
    
db.users.insertOne( {
    "name": "Valeria",
    "lastname": "Alvarez",
    "email": "valeria.alvarez@example.com",
    "city": "London",
    "country": "Estados unidos",
    "salary": 59000,
    "age": 34,
    "height": 167,
    "weight": 65
});

db.users.insertMany([
    {
        "name": "Daniel",
        "lastname": "Martinez",
        "email": "daniel.martinez@example.com",
        "city": "Berlin",
        "country": "Alemania",
        "salary": 62000,
        "age": 36,
        "height": 180,
        "weight": 80
    },
    {
        "name": "Anna",
        "lastname": "Johnson",
        "email": "anna.johnson@example.com",
        "city": "Sydney",
        "country": "Australia",
        "salary": 58000,
        "age": 32,
        "height": 168,
        "weight": 65
    },
    {
        "name": "John",
        "lastname": "Smith",
        "email": "john.smith@example.com",
        "city": "Los Angeles",
        "country": "United States",
        "salary": 65000,
        "age": 40,
        "height": 175,
        "weight": 75
    },
    {
        "name": "Maria",
        "lastname": "Gonzalez",
        "email": "maria.gonzalez@example.com",
        "city": "New York",
        "country": "Estados Unidos",
        "salary": 55000,
        "age": 28,
        "height": 163,
        "weight": 60
    },
    {
        "name": "Valeria",
        "lastname": "Alvarez",
        "email": "valeria.alvarez@example.com",
        "city": "London",
        "country": "Estados unidos",
        "salary": 60000,
        "age": 30,
        "height": 170,
        "weight": 70
    }
]);

db.users.insertOne( {
    "name": "isablea",
    "lastname": "Alvarez",
    "email": "valeria.alvarez@example.com",
    "city": "madrid",
    "country": "España",
    "salary": 40000,
    "age": 34,
    "height": 167,
    "weight": 65
});

db.users.insertOne( {
    "name": "Duvan",
    "lastname": "Alvarez",
    "email": "valeria.alvarez@example.com",
    "city": "Londres",
    "country": "Australia",
    "salary": 40000,
    "age": 31,
    "height": 167,
    "weight": 71
});

db.users.insertOne( {
    "name": "Duvan",
    "lastname": "Alvarez",
    "email": "",
    "city": "Londres",
    "country": "Australia",
    "salary": 40000,
    "age": 31,
    "height": 167,
    "weight": 71
});


//------------------------------------------------------Delete----------------------------------------------

//Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.}
db.users.deleteMany({
    salary:{$lt:2000}
});

//Eliminar usuarios que tienen una edad menor que 25 años.
db.users.deleteMany({
    age:{$lt: 25}
})

//Borrar todos los usuarios que viven en "París".

db.users.deleteMany({
    city: "París"
})

//Eliminar usuarios que tienen un peso superior a 180 libras
db.users.deleteMany({
    weight:{$gt:180}
});

//Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.users.deleteMany({
    height:{$lt: 160}
});

//Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.users.deleteMany({
    $and:[
        {name: {$eq: "John"}},
        {lastname: {$eq:"Doe"}}
    ]
});

//Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
db.users.deleteMany({
    email:{$eq: "borrar@riwi.com"}
});

//Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
db.users.deleteMany({
    email:{$exists: false}
});

//Eliminar usuarios que viven en "Tokyo".
db.users.deleteMany({
    city:{$eq: "Tokyo"}
});

//Borrar todos los usuarios que son menores de 18 años.
db.users.deleteMany({
    age:{$lt: 18}
});

//Eliminar usuarios que tienen un salario igual a 0.
db.users.deleteMany({
    salary:{$eq: 0}
});

//Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
db.users.deleteMany({
    $and:[
        {city:{$eq: "New York"}},
        {salary:{$gt: 5000} }
    ]
});

//Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
db.users.deleteMany({
    email:{$regex: "/spam/i"}
});


//Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.users.deleteMany({
    $and:[
        {city: "Bello"},
        {age: {$gt: 50}}
    ]
});

//Eliminar todos los usuarios que tienen el apellido "González".
db.users.deleteMany({
    lastname:{$eq: "González"}
});

//Borrar usuarios que tienen una edad superior a 70 años.
db.users.deleteMany({
    age:{$gt: 70}
});

//Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.users.deleteMany({
    $and:[
        {country: {$eq: "Canada"}},
        {salary:{$gt: 4000}}
    ]
})

//Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.users.deleteMany({
    salary:{$gte: 1000, $lte: 2000}
});

//Eliminar usuarios que tienen una edad igual a 30 años.
db.users.deleteMany({
    age:{$eq: 30}
});

//Borrar usuarios que tienen una altura superior a 190 centímetros.
db.users.deleteMany({
    height:{$gt: 190}
});


//-----------------------------------------------------UPDATE----------------------------------------------------------


db.users.find()
//Incrementar el salario de todos los usuarios en un 10%
db.users.updateMany({},{ $mul: { salary: 1.1 } })


//Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.users.updateMany({city: {$eq: "New York"}},
{$set: {
    city: "Los Ángeles"
}});

//Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".
db.users.updateMany(
    {
        $and:[
            {email:{$eq:"nuevo@correo.com" }},
            {name: {$eq:"Juan" }}
        ]
    },
    {$set:{
        lastname: "Perez"
    }}
);


//Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.
db.users.updateMany(
    {email: {$eq:"ejemplo@correo.com" }},
    {$set:{
        age:35
    }}
);