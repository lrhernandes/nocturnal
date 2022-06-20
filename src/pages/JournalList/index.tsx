import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

// components
import Default from '../../components/Default';
import JournalListComponent from '../../components/JournalList';
import ButtonComponent from '../../components/Button';
import EmptyComponent from '../../components/Empty';
import { ClipLoader } from 'react-spinners';

// interfaces
import { Journal } from '../../interfaces/journal.interface';
interface ResponseData {
  journals: Journal[];
}

export default function JournalListPage() {
  const navigate = useNavigate();
  const [journals, setJournals] = useState<Journal[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const id = localStorage.getItem('userId');
      try {
        const response: ResponseData = await api.get(`/journals/${id}`);
        setJournals(response.journals);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <Default
      button={
        journals.length > 0 ? (
          <ButtonComponent
            loading={false}
            plain
            click={() => {
              navigate('/journal/new');
            }}
            label="Add Journal"
          />
        ) : null
      }
      child={
        loading ? (
          <ClipLoader
            color={'#2e2d2d'}
            css={`
              display: block;
              margin: 0 auto;
              height: 20px;
              width: 20px;
              margin-top: 30px;
            `}
            loading={loading}
            size={150}
          />
        ) : journals.length > 0 ? (
          <JournalListComponent list={journals} />
        ) : (
          <EmptyComponent
            message="No journals available"
            link="Create a journal"
            route="/journal/new"
          />
        )
      }
    />
  );
}
