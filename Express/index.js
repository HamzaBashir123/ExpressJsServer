import express from 'express'
const app = express();
const port = 8000;
app.get('/', (req, res)=>{
    res.status(200).send("Welcome to the Dashboard page")
})
app.get('/about', (req, res)=> {
    res.status(200).send("Welcome to the about page")
})
app.get('/contact', (req, res)=> {
    res.status(200).send("Welcome to the contact page")
})
app.get('/dahiBaray', (req, res)=> {
    res.status(200).send("yeh lo dahiBaray")
})
app.get('/bhelPuri', (req, res)=> {
    res.status(200).json({
        plate: 1,
        name: "bhelPuri",
        price: 500
    })
})
app.post('/bhelPuri', (req, res)=> {
    res.status(200).send("Jani post bhel puri ki request ban gai")
})
app.delete('/bhelPuri', (req, res)=> {
    res.status(200).send("Jani bhelPuri delete kardi")
})
app.put('/bhelPuri', (req, res)=> {
    res.status(200).send("Jani bhelPuri main masala daal diya hai")
})

app.listen(port, ()=>{
    console.log(`Sun riya hn me port no ${port} is ko tension na lo me dakh lnga ab`)
})