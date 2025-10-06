const UpdateBlog = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>UpdateBlog Component {id} </div>;
};

export default UpdateBlog;
