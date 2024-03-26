import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import Button from "react-bootstrap/Button";
import { getJobAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const favLength = useSelector((state) => state.favourite.content.length);

  const jobs = useSelector((state) => state.result.jobsList);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobAction());
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <Col xs={8} className="mx-auto my-3 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <h1 className="display-1">Remote Jobs Search</h1>

          <Button onClick={() => navigation("/favourites")}>
            <span>Favourites: {favLength}</span>
          </Button>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
