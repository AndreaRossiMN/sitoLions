import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as $_ from 'jquery';
import { Observable } from 'rxjs';
import { ClassificaTappa } from './classifica-tappa';
import { TeamHistory } from './team-history';
const $ = $_;

@Injectable()
export class ClassificaService {

    constructor(private http: HttpClient) { }

    public getClassifica(): Observable<any> {
        return this.http.get<any>(`${environment.samUrl}/GetRankEntries`);
    }

    public getTeamHistory(classifica: ClassificaTappa[], teamName: string): TeamHistory {
        let teamHistory: TeamHistory = { teamName: teamName, entries: new Array() };

        classifica.forEach(ranking => {
            ranking.entries.forEach(entry => {
                if (entry.team == teamName) {
                    teamHistory.entries.push({
                        eventName: ranking.name,
                        points: entry.points
                    });
                    return;
                }
            });
        });

        return teamHistory;
    }


}
