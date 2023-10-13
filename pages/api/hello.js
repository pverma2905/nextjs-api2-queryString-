// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.query)

  res.status(200).json({
    name: req.query.hasOwnProperty('name')?req.query.name:'',
    email: req.query.hasOwnProperty('email')?req.query.email:'',
    message: "GET API CALL"
  })
}

   // res.status(200).json({ name: 'John Doe', message: "GET API CALL" })



