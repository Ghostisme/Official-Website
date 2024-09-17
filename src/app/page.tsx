import HomeScreen from '@/app/components/screen_home';
import LabelScreen from '@/app/components/screen_label';
import WhyChoiceScreen from '@/app/components/screen_why_choice';

export default function Home() {
  return (
    <div>
      <main>
        <HomeScreen />
        <LabelScreen />
        <WhyChoiceScreen />
      </main>
    </div>
  );
}
