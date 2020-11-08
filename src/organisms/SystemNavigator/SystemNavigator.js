import React from "react";
import "./styles.scss";
import TextBox from "../../atoms/Textbox/Textbox";
import List from "../../atoms/List/List";
import ExpandableList from "../../molecules/ExpandableList/ExpandableList";
import TextWith2Links from "../../molecules/TextWith2Links/TextWith2Links";
import Text from "../../atoms/Text/Text";
const SystemNav = ({ SearchInputSubmit, servicesList }) => {
  console.log(servicesList);
  return (
    <section className="system-nav">
      <div className="container">
        <div className="row system-nav__section">
          <div className="col-12">
            <TextBox placeholderText="project_code" TextboxSubmit={SearchInputSubmit} />
          </div>
        </div>
        <div className="row system-nav__section">
          <div className="col-12 ">
            {servicesList.map(({ server_modules, system_modules, dependencies, service_id }, i) => {
              return (
                <ExpandableList key={i} title={service_id}>
                  {server_modules.map(({ name, methods }, i) => {
                    return (
                      <ExpandableList key={i} title={name}>
                        {methods.map(({ fn }, i) => {
                          return (
                            <i>
                              <Text key={i} text={`.${fn}()`} />
                            </i>
                          );
                        })}
                      </ExpandableList>
                    );
                  })}
                </ExpandableList>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemNav;
