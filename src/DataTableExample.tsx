import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataTableExample = () => {
  const IPostsList: IPosts[] = [];

  const [posts, setPosts]: [IPosts[], (posts: IPosts[]) => void] =
    useState(IPostsList);

  useEffect(() => {
    axios
      .get<IPosts[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  return (
    <div>
      <DataTable
        value={posts}
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        dataKey="id"
        paginator
        emptyMessage="No data found."
        className="datatable-responsive"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={10}
      >
        <Column field="userId" sortable header="userId"></Column>
        <Column field="id" sortable header="id"></Column>
        <Column field="title" sortable header="title"></Column>
        <Column field="body" sortable header="body"></Column>
      </DataTable>
    </div>
  );
};

export default DataTableExample;
