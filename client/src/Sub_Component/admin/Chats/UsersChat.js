import React from "react";

const UsersChat = () => {
  return (
    <div>
      <iframe
        style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: 2,
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
        }}
        width={440}
        height={380}
        src="https://charts.mongodb.com/charts-baroque_database-gwsfe/embed/charts?id=645d7be2-d4d9-4387-86eb-2dd970bed0eb&maxDataAge=3600&theme=light&autoRefresh=true"
      />
    </div>
  );
};

export default UsersChat;
