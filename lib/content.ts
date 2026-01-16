import fs from 'fs/promises';
import path from 'path';
import type { Doc, LearningItem, Part, Partner, Product } from './types';

const root = process.cwd();

async function readJsonDir<T>(dirRel: string): Promise<T[]> {
  const dir = path.join(root, dirRel);
  const files = await fs.readdir(dir);
  const jsonFiles = files.filter((f) => f.endsWith('.json'));
  const items: T[] = [];
  for (const f of jsonFiles) {
    const full = path.join(dir, f);
    const raw = await fs.readFile(full, 'utf-8');
    items.push(JSON.parse(raw) as T);
  }
  return items;
}

export async function getAllProducts(): Promise<Product[]> {
  return readJsonDir<Product>('content/products');
}

export async function getAllParts(): Promise<Part[]> {
  return readJsonDir<Part>('content/parts');
}

export async function getAllDocs(): Promise<Doc[]> {
  return readJsonDir<Doc>('content/documents');
}

export async function getAllLearning(): Promise<LearningItem[]> {
  return readJsonDir<LearningItem>('content/learning');
}

export async function getAllPartners(): Promise<Partner[]> {
  return readJsonDir<Partner>('content/partners');
}

export function groupByCategory(products: Product[]): Record<string, Product[]> {
  return products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] ?? [];
    acc[p.category].push(p);
    return acc;
  }, {} as Record<string, Product[]>);
}

export function byId<T extends { id: string }>(items: T[]): Record<string, T> {
  return items.reduce((acc, i) => {
    acc[i.id] = i;
    return acc;
  }, {} as Record<string, T>);
}
