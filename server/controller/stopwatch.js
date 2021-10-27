const Stopwatch = require('../models/stopwatch')
const History = require('../models/history')


// Create
/* Method Post to Create Stopwatch */
exports.createStopwatch = async (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Stopwatch
  const stopwatch = {
    nama: req.body.nama,
  };

  // Save Stopwatch in the database
  Stopwatch.create(stopwatch)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stopwatch."
      });
    });
};


// Read
/* Method Get to Read a Stopwatch's Timestamp by an id */
exports.getStopwatchTimestamp = async (req, res) => {
  const id = req.params.id;

  // Find timestamp of a single Stopwatch with an id
  Stopwatch.findOne({
    where: {
      id_stopwatch: req.params.id
    },
    attributes: ['timestamp'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch with id=" + id
      });
    });
};

/* Method Get to Read a Stopwatch's Status by an id */
exports.getStopwatchStatus = async (req, res) => {
  const id = req.params.id;

  // Find status of a single Stopwatch with an id
  Stopwatch.findOne({
    where: {
      id_stopwatch: req.params.id
    },
    attributes: ['status'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch with id=" + id
      });
    });
};

/* Method Get to Read a Stopwatch by an id */
exports.getStopwatch = async (req, res) => {
  const id = req.params.id;

  // Find a single Stopwatch with an id
  Stopwatch.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch with id=" + id
      });
    });
};

/* Method Get to Read All Stopwatch */
exports.getAllStopwatch = async (req, res) => {
  // Retrieve all Stopwatch from the database
  Stopwatch.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch "
      });
    });
};

/* Method Get to Read a Running Stopwatch ID with condition */
exports.getRunningStopwatchID = async (req, res) => {
  const status = true

  // Retrieve an id of Running Stopwatch with status = true from the database
  await Stopwatch.findOne({ where: { status: true }, attributes: ['id_stopwatch']})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch with id=" + id
      });
    });
};

/* Method Get to Read a Stopwatch's Name by an id */
exports.getStopwatchName = async (req, res) => {
  const id = req.params.id;

  // Find a single Stopwatch's name with an id
  Stopwatch.findOne({
    where: {
      id_stopwatch: req.params.id
    },
    attributes: ['nama'],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stopwatch with id=" + id
      });
    });
};


// Update
/* Method Put to Update Stopwatch's Timestamp by an id */
exports.updateStopwatchTimestamp = async (req, res) => {
  const id = req.params.id;
  
  // Update Stopwatch's timestamp with an id
  Stopwatch.update(
    { timestamp: req.body.timestamp },
    { where: { id_stopwatch: id } }
  )
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Timestamp Stopwatch was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Timestamp Stopwatch with id=${id}. Maybe Timestamp Stopwatch was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Timestamp Stopwatch with id=" + id
      });
    });
};

/* Method Put to Update Stopwatch's Last Timestamp by an id */
exports.updateStopwatchLastTimestamp = async (req, res) => {
  const id = req.params.id;

  // Update Stopwatch's last timestamp with an id
  Stopwatch.update(
    { last_timestamp: req.body.last_timestamp },
    { where: { id_stopwatch: id } }
  )
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Timestamp Stopwatch was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Timestamp Stopwatch with id=${id}. Maybe Timestamp Stopwatch was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Timestamp Stopwatch with id=" + id
      });
    });
};

/* Method Put to Update Stopwatch's Status by an id */
exports.updateStopwatchStatus = async (req, res) => {
  const id = req.params.id;

  // Update Stopwatch's status with an id
  Stopwatch.update(
    { status: req.body.status },
    { where: { id_stopwatch: id } }
  )
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Stopwatch Status was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stopwatch Status with id=${id}. Maybe Timestamp Stopwatch was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stopwatch Status with id=" + id
      });
    });
};

/* Method Put to Update Stopwatch's Name by an id */
exports.updateStopwatchName = async (req, res) => {
  const id = req.params.id;

  // Update Stopwatch's name with an id
  Stopwatch.update(
    { nama: req.body.nama },
    { where: { id_stopwatch: id } }
  )
    .then(data => {
      if (data == 1) {
        res.send({
          message: "Stopwatch Name was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stopwatch Name with id=${id}. Maybe Stopwatch Name was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Stopwatch Name with id=" + id
      });
    });
};


// Delete
/* Method Delete to Delete Stopwatch by an id */
exports.deleteStopwatchByID = async (req, res) => {
  const id = req.params.id;

  // Find a single Stopwatch with an id
  Stopwatch.findByPk(id)
    .then(data => {

      // Create a History
      const history = {
        nama : data.nama,
        timestamp : data.timestamp
      }

      // Save Stopwatch in the History database
      History.create(history)
        .then(status => {
          console.log(status)

          // Delete a Stopwatch with the specified id
          Stopwatch.destroy({
            where: {
              id_stopwatch: req.params.id
            }
          })
            .then(function(rowDeleted){ 
              if (rowDeleted === 1) {
                console.log('Deleted successfully and History Created.s');
                res.send('Deleted successfully and History Created.');
              }
            }, function(err){
              console.log(err); 
            })
        })
    });
};