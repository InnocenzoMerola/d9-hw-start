import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Favourites = function () {
  const favJob = useSelector((state) => state.favourites.content);

  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={8} className="mt-3">
          <h1 className="text-center mb-3">Your Favourites Jobs</h1>
          {favJob.length === 0 && (
            <div>
              <h2>Non hai nessuna azienda nei preferiti</h2>
              <h3>
                Torna alla home e aggiungine una <Link to="/">Home</Link>
              </h3>
            </div>
          )}

          {favJob.length > 0 &&
            favJob.map((job, i) => (
              <div className="d-flex justify-content-between mb-2" key={i}>
                <p>
                  <span className="fw-bold fs-5">
                    <Link to={`/${job.company_name}`} className="text-decoration-none">
                      {job.company_name}
                    </Link>
                  </span>{" "}
                  --- {job.title} --- {job.category}
                </p>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: i,
                    });
                  }}
                >
                  Removed
                </Button>
              </div>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
