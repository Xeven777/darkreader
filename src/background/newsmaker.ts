import type {News} from '../definitions';

export default class Newsmaker {
    static async getLatest(): Promise<News[]> {
    // News fetching is disabled
        return [];
    }

    static subscribe(): void {
    // News subscription is disabled
    }

    static unSubscribe(): void {
    // News unsubscription is disabled
    }

    static async markAsRead(_ids: string[]): Promise<void> {
    // News marking is disabled
    }

    static async markAsDisplayed(_ids: string[]): Promise<void> {
    // News marking is disabled
    }
}

export function setNewsForTesting(_news: News[]): void {
    // News fetching is disabled, nothing to set
}
