import { observer } from 'mobx-react-lite';
import { Pagination } from 'react-bootstrap';

const Pages = observer(() => {

  const pages = [1, 2, 3, 4, 5]

  return (
    <Pagination className="d-flex mt-5 justify-content-center">
      {pages.map(page =>
        <Pagination.Item>{page}</Pagination.Item>
      )}
    </Pagination>
  );
});

export default Pages;