export interface User {
  id: string;
  firstName: string;
  lastName: string;
  nim: string;
  jabatan: string;
  bidang: string;
  divisi: string;
  password?: string;
  pesan: Post[];
}

export interface Post {
  id: string;
  target: User;
  createdAt: Date;
  updatedAt: Date;
  targetId: string;
  content: string;
  postTitle: string;
}
