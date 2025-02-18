export const sendingResponse = (res, status, message, data=null,isSuccess) => {
  res.status(status).json({
    isSuccess,
    message,
    ...(data && {data})
  });
};
