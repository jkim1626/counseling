export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Achieve Your Transfer Dreams
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tutoring from students who successfully transferred to top universities
          </p>
        </div>

        {/* Tutors Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <TutorCard 
            name="Your Name"
            school="UC Berkeley"
            subjects="Math, Computer Science"
            bio="Transferred from community college with 4.0 GPA"
          />
          <TutorCard 
            name="Friend 1"
            school="UCLA"
            subjects="English, History"
            bio="Specialized in transfer essay preparation"
          />
          <TutorCard 
            name="Friend 2"
            school="USC"
            subjects="Biology, Chemistry"
            bio="Pre-med transfer expert"
          />
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out our interest form and we'll match you with the perfect tutor
          </p>
          
          {/* Google Form Embed - Replace with your actual form URL */}
          <div className="aspect-[4/3] w-full">
            <iframe 
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              className="w-full h-full border-0 rounded"
              title="Interest Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Transfer Tutoring. Helping students reach their goals.</p>
        </div>
      </footer>
    </main>
  );
}

function TutorCard({ name, school, subjects, bio }: {
  name: string;
  school: string;
  subjects: string;
  bio: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold text-center mb-2">{name}</h3>
      <p className="text-blue-600 text-center font-medium mb-2">{school}</p>
      <p className="text-sm text-gray-600 text-center mb-3">
        <span className="font-semibold">Subjects:</span> {subjects}
      </p>
      <p className="text-sm text-gray-700 text-center">{bio}</p>
    </div>
  );
}