// import arrowDown from "../assets/arrow-down.svg";
import { useState } from "react";
import { TextInputPanel } from "./InputPanel";
import "../styles/StackingInfoPanel.css";

function StackingInfoPanel({ sectionName, moduleList, updateUI }) {
  const [isEditing, setIsEditing] = useState(true);
  const [stackList, setStackList] = useState([]);
  const requiredFields = moduleList.filter((module) => {
    return module.isRequired;
  });
  const getInfo = (DOMtarget) => {
    if (
      !DOMtarget ||
      requiredFields.some((field) => {
        return (
          DOMtarget.querySelector(`.panel-module#${field.id} input`).value ===
          ""
        );
      }) === true
    )
      return null;
    let objToReturn = {};
    Array.from(DOMtarget.querySelectorAll(".panel-module")).forEach(
      (module) => {
        const id = module.id;
        const value = module.querySelector("input").value;
        objToReturn = { ...objToReturn, [id]: value };
      }
    );
    return objToReturn;
  };
  const handleOnSave = (e) => {
    // Save the educationStackList
    const DOMtarget = e.target.closest(".panel");
    const info = getInfo(DOMtarget);
    if (info !== null) {
      const newStackList = [...stackList, info];
      setStackList(newStackList);
      updateUI(newStackList);
    }
    setIsEditing(false);
  };

  const handleOnEdit = (e) => {
    setIsEditing(true);
    // Remove the target on educationStackList
    const targetToRemove = e.target.textContent;
    const updatedStackList = stackList.filter((education) => {
      return (
        requiredFields.filter((field) => {
          return education[field.id] === targetToRemove;
        }).length === 0
      );
    });
    setStackList(updatedStackList);
    updateUI(updatedStackList);
  };
  return (
    <>
      {isEditing ? (
        <>
          <TextInputPanel
            panelName={sectionName}
            moduleList={moduleList}
            handleOnSave={handleOnSave}
          />
        </>
      ) : (
        <>
          <div className="panel education">
            <h2>{sectionName}</h2>
            <div className="stacking-panel-list">
              {stackList.map((item) => {
                return (
                  <div
                    className="stacking-info-panel"
                    key={requiredFields[0].id
                      .toLowerCase()
                      .split(" ")
                      .join("-")}
                    onClick={handleOnEdit}
                  >
                    <h3>
                      {
                        item[
                          Object.keys(item).find((element) =>
                            requiredFields.some((field) => (field.id = element))
                          )
                        ]
                      }
                    </h3>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Add {sectionName}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default StackingInfoPanel;
