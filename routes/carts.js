const express = require(`express`)


const { Router } = express

const router = new Router()


router.post(`/`, (req, res) => {
    res.send(``)
})

router.get(`/:cid`, (req, res) => {
    res.send(``)
})

router.post(`/:cid/product/:pid`, (req, res) => {
    res.send(``)
})

module.exports = router