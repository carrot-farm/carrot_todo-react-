/*
  admin 메인 페이지
*/
import React from "react";
import classNames from "classnames/bind";

import styles from "./styles.scss";
import { Container, Section, Row, Col } from "components/common/Elements";
import MaterialFormContainer from "containers/common/MaterialFormContainer.js";

const cx = classNames.bind(styles);

// ===== 헤더
const AdminMain = ({ drawerSw }) => {
  return (
    <>
      <Section>
        <Container>
          <h2>관리자 메인</h2>
          <MaterialFormContainer formName={"PageMenuForm"} />
        </Container>
      </Section>
    </>
  );
};

export default AdminMain;
