import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Do you also do Sponsored Brands Video?</h3>
            <p className="text-gray-400">
              No. Sponsored Brands Video behaves differently and is not the highest-leverage trust point. 
              We specialize only in Sponsored Products Video because it influences click quality and relevance most directly.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">Why is this €1,500?</h3>
            <p className="text-gray-400">
              Because the value is in the diagnosis and script — not the footage. You are paying to remove a specific 
              conversion failure, not to "create content."
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">Do I need to ship my product?</h3>
            <p className="text-gray-400">
              Usually no. We use a hybrid production model and only request shipping if physical interaction is 
              required to demonstrate the mechanism.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">What exactly is the Safety Net?</h3>
            <p className="text-gray-400">
              If your SPV does not outperform baseline conversion or ACOS within 60 days, we rescript and reshoot 
              the hook at our expense.
            </p>
          </div>
          
          <div className="border border-red-900/20 bg-red-900/5 p-6 rounded-xl mt-8">
             <h3 className="text-lg font-bold text-red-400 mb-2">What We Do Not Do</h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-400 text-sm">
                <li>• No Social Media Management</li>
                <li>• No Influencer Outreach</li>
                <li>• No AI-Generated Content</li>
                <li>• No "Brand Storytelling"</li>
                <li>• No Monthly Retainers</li>
                <li>• No Ad Management</li>
             </ul>
             <p className="mt-4 text-xs text-gray-500">We work best with brands that want operational fixes, not marketing experiments.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;