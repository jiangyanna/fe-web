export default function (req, res, next) {
  console.log('---req.url:', req.url);
  next();
}