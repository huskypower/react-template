import React from "react";
const applicationList = [
  {
    id: 1,
    applicantName: "Ankit",
    applicationStatus: "approved",
    salesUserName: "XYZ"
  },
  {
    id: 2,
    applicantName: "Tim",
    applicationStatus: "rejected",
    salesUserName: "EFG"
  },
  {
    id: 3,
    applicantName: "MrBean",
    applicationStatus: "pending",
    salesUserName: "GHK"
  },
  {
    id: 4,
    applicantName: "WhoAmI",
    applicationStatus: "approved",
    salesUserName: "XPW"
  }
];

export const ViewApplicationList = () => {
  return (
    <React.Fragment>
      {applicationList.map((application) => {
        //Obect destructuring
        // const{applicantName,applicationStatus,salesUserName}=application;
        return (
          <div>
            <h2>Applicant Name: {application.applicantName}</h2>
            <p>
              <i>
                <b>Status of Application : {application.applicationStatus}</b>
              </i>
            </p>
            <h3>Sales User:{application.salesUserName}</h3>
            <hr></hr>
          </div>
        );
      })}
    </React.Fragment>
  );
};
