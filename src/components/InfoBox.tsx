import React from "react";

export function InfoBox({title, children}:{title: string, children: React.ReactNode}){
    return(
        <aside className="hint-container tip">
          <p className="hint-container-title">
            {title}
          </p>
          <div className="v-card-text">
            <p>
                {children}
            </p>
          </div>
        </aside>
    )
}