import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { getEducationsId } from "../../../redux/actions/educationsActions";
import { educations, educationsId } from "../../../redux/initialValues/educations";



