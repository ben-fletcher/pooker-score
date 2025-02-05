import { FC } from "react";
import { Table } from "react-bootstrap";

const Scoreboard: FC = () => {
  return (
    <Table responsive striped bordered size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          {/* TODO: add dynamic ball/turns here */}
        </tr>
      </thead>
      <tbody>{/* TODO: add dynamic player rows here */}</tbody>
    </Table>
  );
};

export default Scoreboard;
