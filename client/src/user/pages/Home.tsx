import LanguageSwitcher from '@components/LanguageSwitcher';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { RootState } from '@context/store';
import { useAppDispatch } from '@context/hooks';
import { fetchHello } from '@context/hello/helloSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { message as messageAntd } from 'antd';
import Loading from '@components/Loading';

function Home() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { message, loading } = useSelector((state: RootState) => state.hello);
  const [messageApi, contextHolder] = messageAntd.useMessage();


  useEffect(() => {
    dispatch(fetchHello());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      messageApi.open({
        type: 'success',
        content: message,
      });
    }
  }, [message, messageApi]);

  if (loading) return <Loading />;

  return (
    <div>
      {contextHolder}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-800 mb-4">{t('popularJobs')}</h2>
            <p className="font-varela text-xl text-gray-600">{t('explore')}</p>
            <LanguageSwitcher />
            <Link to='/tailwind' />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Technology', count: '12,543', icon: '💻', color: 'bg-blue-500' },
              { name: 'Marketing', count: '8,234', icon: '📈', color: 'bg-green-500' },
              { name: 'Finance', count: '6,789', icon: '💰', color: 'bg-yellow-500' },
              { name: 'Healthcare', count: '5,432', icon: '🏥', color: 'bg-red-500' },
              { name: 'Education', count: '4,321', icon: '📚', color: 'bg-purple-500' },
              { name: 'Design', count: '3,456', icon: '🎨', color: 'bg-pink-500' },
              { name: 'Sales', count: '7,654', icon: '🤝', color: 'bg-indigo-500' },
              { name: 'Engineering', count: '9,876', icon: '⚙️', color: 'bg-gray-500' },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-varela font-bold text-gray-800 mb-1">{category.name}</h3>
                <p className="font-varela font-medium text-gray-600 text-sm">{category.count} jobs</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;