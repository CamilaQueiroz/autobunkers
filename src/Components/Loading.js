import React from 'react';




export default function Loading() {

    return (
        <div className="col-12 justify-content-center">
            <div class="timeline-item">
                <div class="animated-background">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-danger" role="status">
                            <p>Teste</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
