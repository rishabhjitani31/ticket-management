import React from "react";
import { Icon } from "antd";
import store from "./Store";

const columns = () => {
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Issue Type",
      dataIndex: "issue",
      key: "issue"
    },
    {
      title: "Action",
      render: (text, rowData) => {
        return (
          <Icon
            type="pushpin"
            onClick={() => store.onAssignTicketsClick(rowData)}
          />
        );
      },
      dataIndex: "issue",
      key: "action"
    }
  ];
};
export default columns;
