import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
  Text,
} from "material-tailwind";

import Card from "components/card/Card";
import { VSeparator } from "components/separator/Separator";

const Tree = () => (
  <Card p="6px" rounded="lg" border="1px solid #d6d6d6" bg="black">
    <Table className="bg-black">
      <TableHead className="bg-black">
        <TableRow>
          <TableCell width="33%" align="center">
            #
          </TableCell>
          <TableCell align="center">Left</TableCell>
          <TableCell align="center">Right</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TreeNode name="Users" leftCount={6} rightCount={0} />
        <TreeNode name="Business" leftCount="$0.00" rightCount="$0.00" />
        <TreeNode name="Carry" leftCount="$0" rightCount="$0" />
        <TreeNode name="Capping" leftCount="$1500" />
        <TreeNode name="Binary" leftCount="$0" />
      </TableBody>
    </Table>
  </Card>
);

const TreeNode = ({ name, leftCount, rightCount }) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>{leftCount}</TableCell>
    <TableCell>{rightCount}</TableCell>
  </TableRow>
);

const Binary = ({ last, first }) => {
  const [showTree, setShowTree] = useState(false);
  const handleImageClick = () => {
    setShowTree(!showTree);
  };
  const handleImageHover = () => {
    setShowTree(true);
  };

  const handleImageLeave = () => {
    setShowTree(false);
  };

  return (
    <div
      className="flex items-center justify-center flex-col relative bg-black"
      onMouseEnter={handleImageHover}
      onMouseLeave={handleImageLeave}
      onClick={handleImageClick}
    >
      {!first && <VSeparator style={{ height: "30px" }} />}
      <Avatar />
      {showTree && (
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-black"
        >
          <Tree />
        </div>
      )}
      <Text>John Smith</Text>
      {!last && <VSeparator style={{ height: "30px" }} />}
    </div>
  );
};

export default Tree;

