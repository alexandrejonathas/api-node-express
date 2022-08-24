let contactDB = [
    {"id": 1, "name": "Jonathas"},
    {"id": 2, "name": "Morgana"},
    {"id": 3, "name": "Ana"},
    {"id": 4, "name": "Artur"}
];

exports.createContact = (req, res) => {
    const body = req.body;
    if (!body.id || !body.name) {
        return res.status(400).end();
    }
    contactDB.push(body);
    res.set('Location', `${req.protocol}://${req.headers.host}${req.originalUrl}/${body.id}`);
    res.status(201).end();
}

exports.listContact = (req, res) => {
    res.status(200).json(contactDB);
}

exports.findContact = (req, res) => {
    const contact = contactDB.filter((c) => c.id == req.params.id)[0];
    if (!contact) {
        return res.status(404).end();
    }
    res.status(200).json(contact);
}

exports.updateContact = (req, res) => {
    const contact = contactDB.filter((c) => c.id == req.params.id)[0];
    if (!contact) {
        return res.status(404).end();
    }

    contactDB = contactDB.map((c) => {
        if (c.id == req.params.id) {
            c = req.body;
        }
        return c;
    });

    res.status(204).json({});
}

exports.deleteContact = (req, res) => {
    const contact = contactDB.filter((c) => c.id == req.params.id)[0];
    if (!contact) {
        return res.status(404).end();
    }
    contactDB = contactDB.filter((c) => c.id != req.params.id);    
    res.status(204).json({});
}