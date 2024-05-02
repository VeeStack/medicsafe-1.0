

// Middleware to restrict access based on user role
exports.authorizeRole = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
      next();
    };
  };
  