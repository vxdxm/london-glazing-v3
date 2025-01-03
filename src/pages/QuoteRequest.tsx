import { Helmet } from "react-helmet";

const QuoteRequest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Get a Free Secondary Glazing Quote | London Installation Services</title>
        <meta name="description" content="Request a free quote for secondary glazing installation in London. Expert consultation and competitive pricing for all window types." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Request a Quote</h1>
        <p className="text-lg mb-4">Fill out the form below to receive a free quote for our secondary glazing services.</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequest;
