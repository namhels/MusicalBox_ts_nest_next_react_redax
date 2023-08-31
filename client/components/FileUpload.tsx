import React, {useRef} from 'react';

interface CoverArtProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
}

const FileUpload: React.FC<CoverArtProps> = ({  setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files && e.target.files[0]);
    // setFile(e.target.files ?? [0]);
  }

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type='file'
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  )
}

export default FileUpload;