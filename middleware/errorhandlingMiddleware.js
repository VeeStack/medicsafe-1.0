
exports.handleVerificationError = (err, req, res, next) => {
    if (err.message === 'Invalid verification code') {
      return res.status(400).json({ message: 'Invalid verification code' });
    }
    next(err);
  };

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

