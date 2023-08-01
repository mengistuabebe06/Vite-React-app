import React from "react";
import MouseEvent from "react";
import { useState } from "react";

// signature of the varibls
interface Props {
  items: string[];
  heading: string;
  //   on is convattion for declear funcation hear like onClick
  onSelectedItem: (item: string) => void;
}
// export default function ListGroup(props: Props) {
export default function ListGroup({ items, heading, onSelectedItem }: Props) {
  //   items = [];
  var count = 0;

  // event handling
  //   const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
  //     //   const handleClick = (e: MouseEvent) => {
  //     e.preventDefault();
  //     console.log(e);
  //   };
  // let selectedIndex = -1;
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>List {heading}</h1>
      {/* {props.items.length === 0 && <h1>Items is not Found</h1>} */}
      {items.length === 0 && <h1>Items is not Found</h1>}

      <hr />
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={(count = count + 1)}
            onClick={(e) => {
              setselectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
