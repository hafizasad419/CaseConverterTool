import React, { useState } from 'react';
import { TextModificationLayout } from '../..';

function UTMBuilderGenerator() {
    const [utmParams, setUtmParams] = useState({
        source: '',
        medium: '',
        campaign: '',
        term: '',
        content: ''
    });

    const buildUTMUrl = (text) => {
        const baseUrl = text.split('?')[0];
        const queryParams = new URLSearchParams(utmParams).toString();
        return `${baseUrl}?${queryParams}`;
    };

    return (
        <section className="my-8">
            <div className="px-4">
                <h1 className="text center text-4xl my-4 md:text-6xl text-customGray font-bold">UTM Builder Generator</h1>
                <p className="text-sm md:text-lg md:max-w-[60vw]">
                    Create UTM parameters for your URLs to track the effectiveness of your marketing campaigns.
                </p>
            </div>

            <div className="flex flex-col gap-4 p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Campaign Source (e.g., google)"
                        className="p-2 border border-gray-300 rounded-lg"
                        value={utmParams.source}
                        onChange={(e) => setUtmParams({ ...utmParams, source: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Campaign Medium (e.g., cpc)"
                        className="p-2 border border-gray-300 rounded-lg"
                        value={utmParams.medium}
                        onChange={(e) => setUtmParams({ ...utmParams, medium: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Campaign Name (e.g., summer_sale)"
                        className="p-2 border border-gray-300 rounded-lg"
                        value={utmParams.campaign}
                        onChange={(e) => setUtmParams({ ...utmParams, campaign: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Campaign Term (e.g., running shoes)"
                        className="p-2 border border-gray-300 rounded-lg"
                        value={utmParams.term}
                        onChange={(e) => setUtmParams({ ...utmParams, term: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Campaign Content (e.g., banner ad)"
                        className="p-2 border border-gray-300 rounded-lg"
                        value={utmParams.content}
                        onChange={(e) => setUtmParams({ ...utmParams, content: e.target.value })}
                    />
                </div>

                <TextModificationLayout
                    title="UTM Builder"
                    description="Construct your UTM-enabled URL below."
                    transformFunction={buildUTMUrl}
                />
            </div>
        </section>
    );
}

export default UTMBuilderGenerator;
