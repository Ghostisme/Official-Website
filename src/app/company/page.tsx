import CompanyHome from '@/app/components/company_home';
import Values from '@/app/components/company_values';
const Company = () => {
  return (
    <div className="w-screen h-screen bg-black text-white overflow-x-hidden">
      <section>
        <CompanyHome />
      </section>
      <section>
        <Values />
      </section>
    </div>
  );
};

export default Company;
