import {
  Button,
  Container,
  Form,
  InputGroup,
  Row,
} from "@themesberg/react-bootstrap";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { request } from "../../helper/request.helper";
import { Routes } from "../../routes";

export default () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation(); // khai báo location để nhận giá trị được gửi từ trước

  let { addToast } = useToasts();
  let history = useHistory();
  let addTag = (form) => {
    // form : {title: form.title}
    request({
      method: "POST",
      url: `Tags`,
      data: form,
    })
      .then(() => {
        history.push(Routes.Tag.path);
        addToast("Edit Tag Success", {
          appearance: "success",
          autoDismiss: 1000,
        });
      })
      .catch((error) => {
        addToast("Error", { appearance: "error", autoDismiss: 2000 });
      });
  };
  return (
    <Container>
      <Row>
        <h3 className="mb-3">Thêm thẻ tag</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tiêu đề</Form.Label>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputGroup
                  style={{
                    border:
                      errors.title?.type === "required" && "1px solid red",
                  }}
                >
                  <Form.Control
                    autoFocus
                    required
                    type="text"
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                  />
                </InputGroup>
              )}
              rules={{
                required: true,
              }}
            />
          </Form.Group>

          <Button
            variant="secondary"
            type="button"
            className="m-3"
            onClick={() => history.push(Routes.Tag.path)}
          >
            Hủy
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={handleSubmit(addTag)}
          >
            Xác nhận
          </Button>
        </Form>
      </Row>
    </Container>
  );
};
