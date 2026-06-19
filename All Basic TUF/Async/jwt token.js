const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET
);

// custom hooks


function useFetch(url) {
  // custom logic
}

//lazy loading and code splitting

const Dashboard = React.lazy(() =>
  import("./Dashboard")
);
