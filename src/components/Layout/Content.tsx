import { Route, Routes } from 'react-router-dom';
import ItemContainer from 'containers/ItemContainer';
import StoryListContainer from 'containers/StoryListContainer';
import { NEW_STORIES, TOP_STORIES } from 'services/api';
import './Content.scss';

const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<StoryListContainer url={TOP_STORIES} />} />
        <Route
          path="/latest"
          element={<StoryListContainer url={NEW_STORIES} />}
        />
        <Route path="/item/:id" element={<ItemContainer />} />
      </Routes>
    </main>
  );
};

export default Content;
