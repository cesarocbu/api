const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.oy7fmvz.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User',{
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'Chanchito triste', edad: 25});
    const savedUser = await user.save()
    console.log(savedUser);
}

//crear()
const buscarTodo = async () => {
    const users = await User.find()
    console.log(users);
}

//buscarTodo()

const buscar = async () => {
    const user = await User.find({ username: 'Chanchito feliz'})
    console.log(user);
}

//buscar()

const buscarUno = async () => {
    const user = await User.findOne({ username: 'Chanchito feliz'})
    console.log(user);
}

//buscarUno()

const actualizar = async () => {
    const user = await User.findOne({ username: 'Chanchito feliz'})
    console.log(user);
    user.edad = 30
    await user.save()
}
//actualizar()

const eliminar = async () => {
    const user = await User.findOne({ username: 'Chanchito triste'})
    if (user) {
        await user.remove()
    }
}

//eliminar()
